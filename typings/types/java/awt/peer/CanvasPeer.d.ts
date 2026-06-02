import type { GraphicsConfiguration } from '../../../java/awt/GraphicsConfiguration.d.ts'
import type { ComponentPeer } from '../../../java/awt/peer/ComponentPeer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface CanvasPeer extends ComponentPeer, Object{
    getAppropriateGraphicsConfiguration(arg0: GraphicsConfiguration): GraphicsConfiguration;
}