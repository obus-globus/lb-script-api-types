import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DynamicRegistryView } from '../../../../../../net/fabricmc/fabric/api/event/registry/DynamicRegistryView.d.ts'
export interface DynamicRegistrySetupCallback extends Object{
    onRegistrySetup(arg0: DynamicRegistryView): void;
}