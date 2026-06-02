import type { JsonElement } from '../../../../../../com/google/gson/JsonElement.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ModelInstance } from '../../../../../../net/minecraft/client/data/models/model/ModelInstance.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class DelegatedModel extends Object implements ModelInstance {
    constructor(parent: Identifier)
    // private parent: Identifier;
    get(): JsonElement;
}