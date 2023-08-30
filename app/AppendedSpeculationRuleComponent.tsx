'use client'
 
import { useEffect, useState } from 'react'
import { memoizedSpeculationRuleAppending } from './helper';
 
export const AppendedSpeculationRuleComponent = () => {

  useEffect(() => {
    memoizedSpeculationRuleAppending('prefetch', ['https://www.google.com/search?q=this+also+works'])
  }, []);

  return (
    <div />
  )
}