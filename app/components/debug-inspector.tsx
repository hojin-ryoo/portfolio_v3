'use client';

import { useEffect } from 'react';

export default function DebugInspector() {
  useEffect(() => {
    // #region agent log
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const isDark = darkModeQuery.matches;
    fetch('http://127.0.0.1:7242/ingest/bd3d450a-adf4-4e87-8d53-ce253c2d609c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'debug-inspector.tsx:9',message:'Dark mode detection on mount',data:{isDarkMode:isDark,userAgent:navigator.userAgent},timestamp:Date.now(),sessionId:'debug-session',runId:'initial',hypothesisId:'D'})}).catch(()=>{});
    // #endregion

    // #region agent log
    const h1 = document.querySelector('.hero-gradient');
    if (h1) {
      const computedStyles = window.getComputedStyle(h1);
      const allStyles = {
        color: computedStyles.color,
        webkitTextFillColor: computedStyles.webkitTextFillColor || computedStyles.getPropertyValue('-webkit-text-fill-color'),
        backgroundClip: computedStyles.backgroundClip || computedStyles.getPropertyValue('background-clip'),
        webkitBackgroundClip: computedStyles.webkitBackgroundClip || computedStyles.getPropertyValue('-webkit-background-clip'),
        backgroundImage: computedStyles.backgroundImage,
        backgroundSize: computedStyles.backgroundSize,
        display: computedStyles.display,
        fontWeight: computedStyles.fontWeight,
      };
      fetch('http://127.0.0.1:7242/ingest/bd3d450a-adf4-4e87-8d53-ce253c2d609c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'debug-inspector.tsx:24',message:'H1 computed styles after mount',data:allStyles,timestamp:Date.now(),sessionId:'debug-session',runId:'initial',hypothesisId:'A,B,C,E'})}).catch(()=>{});
    }
    // #endregion

    // #region agent log
    const stylesheets = Array.from(document.styleSheets);
    const cssRules = stylesheets.map((sheet, idx) => {
      try {
        const rules = Array.from(sheet.cssRules || []).filter(rule => 
          rule.cssText?.includes('hero-gradient')
        ).map(r => r.cssText);
        return { sheetIndex: idx, href: sheet.href, rules };
      } catch (e) {
        return { sheetIndex: idx, href: sheet.href, error: 'Cannot access' as const };
      }
    }).filter(s => (s.rules && s.rules.length > 0) || 'error' in s);
    fetch('http://127.0.0.1:7242/ingest/bd3d450a-adf4-4e87-8d53-ce253c2d609c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'debug-inspector.tsx:40',message:'CSS rules containing hero-gradient',data:{stylesheets:cssRules},timestamp:Date.now(),sessionId:'debug-session',runId:'initial',hypothesisId:'C,E'})}).catch(()=>{});
    // #endregion
  }, []);

  return null;
}

