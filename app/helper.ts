import memoize from 'lodash/memoize'

export const memoizedSpeculationRuleAppending = memoize(
    (type: 'prerender' | 'prefetch', routes?: string[]) => {
      if (
        typeof window !== 'undefined' &&
        HTMLScriptElement.supports &&
        HTMLScriptElement.supports('speculationrules') &&
        routes?.length
      ) {
        const specScript = document.createElement('script');
        specScript.type = 'speculationrules';
        const specRules = {
          [type]: [
            {
              source: 'list',
              urls: routes,
            },
          ],
        };
        specScript.textContent = JSON.stringify(specRules);
        document.body.append(specScript);
      }
      return true;
    }
  );