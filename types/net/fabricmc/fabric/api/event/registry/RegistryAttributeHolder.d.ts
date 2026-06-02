import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RegistryAttribute } from '../../../../../../net/fabricmc/fabric/api/event/registry/RegistryAttribute.d.ts'
export interface RegistryAttributeHolder extends Object{
    addAttribute(arg0: RegistryAttribute): RegistryAttributeHolder;
    hasAttribute(arg0: RegistryAttribute): boolean;
}