import type { Dialog } from '../../../java/awt/Dialog.d.ts'
import type { GraphicsConfiguration } from '../../../java/awt/GraphicsConfiguration.d.ts'
import type { ContainerPeer } from '../../../java/awt/peer/ContainerPeer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface WindowPeer extends ContainerPeer, Object{
    getAppropriateGraphicsConfiguration(arg0: GraphicsConfiguration): GraphicsConfiguration;
    setModalBlocked(arg0: Dialog, arg1: boolean): void;
    setOpacity(arg0: number): void;
    setOpaque(arg0: boolean): void;
    toBack(): void;
    toFront(): void;
    updateAlwaysOnTopState(): void;
    updateFocusableWindowState(): void;
    updateIconImages(): void;
    updateMinimumSize(): void;
    updateWindow(): void;
}