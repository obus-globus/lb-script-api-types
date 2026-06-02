import type { Insets } from '../../../java/awt/Insets.d.ts'
import type { ComponentPeer } from '../../../java/awt/peer/ComponentPeer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ContainerPeer extends ComponentPeer, Object{
    beginLayout(): void;
    beginValidate(): void;
    endLayout(): void;
    endValidate(): void;
    getInsets(): Insets;
}