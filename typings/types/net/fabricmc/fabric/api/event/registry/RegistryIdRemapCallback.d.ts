import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RegistryIdRemapCallback$RemapState } from '../../../../../../net/fabricmc/fabric/api/event/registry/RegistryIdRemapCallback$RemapState.d.ts'
export interface RegistryIdRemapCallback<T extends unknown> extends Object{
    onRemap(arg0: RegistryIdRemapCallback$RemapState<T>): void;
}