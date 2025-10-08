import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "~/styles/layout.scss";

export default function App() {
  return (
    <Router
      root={props => (
        <MetaProvider>
          <Suspense>
            <div class="layout">
            {props.children}
            </div>
            </Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
