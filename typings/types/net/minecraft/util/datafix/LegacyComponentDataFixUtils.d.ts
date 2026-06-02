import type { Dynamic } from '../../../../com/mojang/serialization/Dynamic.d.ts'
import type { DynamicOps } from '../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LegacyComponentDataFixUtils extends Object {
    static createEmptyComponent(paramops: DynamicOps<Object>): Dynamic<Object>;
    static createPlainTextComponent(paramops: DynamicOps<Object>, paramtext: string): Dynamic<Object>;
    static createTextComponentJson(paramtext: string): string;
    static createTranslatableComponent(paramops: DynamicOps<Object>, paramkey: string): Dynamic<Object>;
    static createTranslatableComponentJson(paramkey: string): string;
    static extractTranslationString(paramcomponent: string): Optional<string>;
    static isStrictlyValidJson(paramcomponent: Dynamic<Object>): boolean;
    static rewriteFromLenient(paramstring: string): string;
    constructor()
}