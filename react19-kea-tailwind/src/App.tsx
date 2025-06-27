import { resetContext } from 'kea'
import { loadersPlugin } from 'kea-loaders';
import { routerPlugin } from 'kea-router'
import { sceneLogic } from './logic/sceneLogic';
import { Suspense } from 'react'
import { useValues } from 'kea'
import { scenes } from './logic/sceneLogic'
import MainLayout from './layouts/MainLayout'
import Spinner from './components/Spinner'

// Setup Kea with plugins
resetContext({
  plugins: [loadersPlugin, routerPlugin],
});

// Mount the scene logic to start URL handling
sceneLogic.mount();

const Scenes = () => {
  const { scene } = useValues(sceneLogic)

  const Scene = scenes[scene as keyof typeof scenes] || scenes.error404

  return (
    <MainLayout>
      <Suspense fallback={<Spinner loading={true} />}>
        <Scene />
      </Suspense>
    </MainLayout>
  )
}

const App = () => <Scenes />

export default App
