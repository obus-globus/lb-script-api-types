import type { Object } from '../../../java/lang/Object.d.ts'
import type { JsonElement } from '../../../kotlinx/serialization/json/JsonElement.d.ts'
export class JsonArrayBuilder extends Object {
    constructor()
    // private content: JsonElement[];
    add(element: JsonElement): boolean;
    addAll(elements: E[]): boolean;
    build(): (Object | null)[];
}