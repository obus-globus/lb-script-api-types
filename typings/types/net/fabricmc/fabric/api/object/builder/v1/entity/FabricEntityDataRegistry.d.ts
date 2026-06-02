import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { EntityDataSerializer } from '../../../../../../../../net/minecraft/network/syncher/EntityDataSerializer.d.ts'
import type { Identifier } from '../../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class FabricEntityDataRegistry extends Object {
    static get(paramarg0: Identifier): EntityDataSerializer<Object>;
    static getId(paramarg0: EntityDataSerializer<Object>): Identifier;
    static register(paramarg0: Identifier, paramarg1: EntityDataSerializer<Object>): void;
    private constructor()
}