import type { CheckboxGroup } from '../../../java/awt/CheckboxGroup.d.ts'
import type { ComponentPeer } from '../../../java/awt/peer/ComponentPeer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface CheckboxPeer extends ComponentPeer, Object{
    setCheckboxGroup(arg0: CheckboxGroup): void;
    setLabel(arg0: string): void;
    setState(arg0: boolean): void;
}