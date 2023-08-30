'use client'
 
import { useEffect, useState } from 'react'
 
export const SpeculationRuleComponent = () => {
    const [speculationRules, setSpeculationRules] = useState<string[]>();

  useEffect(() => {
    setSpeculationRules(['https://vercel.com/new', 'https://nextjs.org/docs'])
  }, []);

  return (
    <div>
      <p>This component renders on the client and injects speculation prerender rules into the page</p>
      {speculationRules?.length ?           
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              prerender: [
                {
                  source: 'list',
                  urls: speculationRules,
                },
              ],
            }),
          }}
          type="speculationrules"
        /> : null
      }
    </div>
  )
}