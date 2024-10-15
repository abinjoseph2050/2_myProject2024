import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


interface Route {
  title?: string | Type<Resolve<string>> | ResolveFn<string>;
  path?: string;
  pathMatch?: "prefix" | "full";
  matcher?: UrlMatcher;
  component?: Type<any>;
  loadComponent?: () => Type<unknown> | Observable<Type<unknown> | DefaultExport<Type<unknown>>> | Promise<Type<unknown> | DefaultExport<Type<unknown>>>;
  redirectTo?: string | RedirectFunction;
  outlet?: string;
  canActivate?: any[];
  canMatch?: any[];
  canActivateChild?: any[];
  canDeactivate?: any[];
  canLoad?: any[];
  data?: Data;
  resolve?: ResolveData;
  children?: Routes;
  loadChildren?: LoadChildrenCallback;
  runGuardsAndResolvers?: RunGuardsAndResolvers;
  providers?: (EnvironmentProviders | Provider)[];
{
  "angularCompilerOptions": {
    "extendedDiagnostics": {
      // The categories to use for specific diagnostics.
      "checks": {
        // Maps check name to its category.
        "invalidBananaInBox": "suppress"
      },
      // The category to use for any diagnostics not listed in `checks` above.
      "defaultCategory": "error"
    }
  }
}
