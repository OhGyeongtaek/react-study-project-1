export interface RouteConfig extends RouteObject {
  auth?: boolean;
  roles?: string[];
  children?: RouteConfig[];
}
