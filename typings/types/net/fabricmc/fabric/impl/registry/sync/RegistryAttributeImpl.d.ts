import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RegistryAttribute } from '../../../../../../net/fabricmc/fabric/api/event/registry/RegistryAttribute.d.ts'
import type { RegistryAttributeHolder } from '../../../../../../net/fabricmc/fabric/api/event/registry/RegistryAttributeHolder.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
export class RegistryAttributeImpl extends Object implements RegistryAttributeHolder {
    static get(paramarg0: Object[]): RegistryAttributeHolder;
    static get(paramarg0: ResourceKey<Object>): RegistryAttributeHolder;
    static getHolder(paramarg0: ResourceKey<Object>): RegistryAttributeHolder;
    private constructor()
    readonly attributes: RegistryAttribute[];
    addAttribute(arg0: RegistryAttribute): RegistryAttributeHolder;
    getAttributes(): RegistryAttribute[];
    hasAttribute(arg0: RegistryAttribute): boolean;
    removeAttribute(arg0: RegistryAttribute): void;
}