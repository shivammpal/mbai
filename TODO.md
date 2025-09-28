# TODO: Fix Mobile View Issues (White Line and Black Screen on Left)

## Steps from Approved Plan

1. [x] Edit src/styles/main.css:
   - Add overflow-x: hidden to body.
   - Add box-sizing: border-box to * (universal selector).
   - Add html { margin: 0; padding: 0; } for full reset.

2. [x] Edit src/styles/Navbar.css:
   - In mobile media query, add overflow: hidden to .nav-menu when not active.
   - Adjust .navbar-logo and .menu-icon positioning to avoid transform offsets causing overflow (e.g., use fixed left/right values).

3. [ ] Start development server if not running: Execute `npm run dev`.

4. [ ] Test the fix:
   - Use browser to simulate mobile view (e.g., iPhone dimensions).
   - Verify no white line (scrollbar/edge) or black screen (menu overflow) on the left across pages.
   - Check Navbar menu toggle functionality.

5. [ ] If issues persist, inspect other CSS files (e.g., Services.css) and update plan.

6. [ ] Mark all steps complete and close task.
