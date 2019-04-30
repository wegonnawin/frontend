import React, { useRef, useCallback } from 'react';

export default function useStaticVariable(init) {
  const staticVariableRef = useRef(init);
  const getStaticVariable =
    useCallback(() => staticVariableRef.current, [staticVariableRef]);
  const setStaticVariable =
    useCallback(newValue => staticVariableRef.current = newValue, [staticVariableRef]);

  return [getStaticVariable, setStaticVariable];
}