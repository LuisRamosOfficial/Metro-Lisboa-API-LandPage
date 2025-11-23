import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import {onMount, Suspense } from "solid-js";
import Layout from "~/components/layout";
export default function App() {
  return (
    <Router
      root={props => (
        <MetaProvider>
          <Suspense>
            <Layout>

            {props.children}
            </Layout>

            </Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
