import type { Dynamic } from '../../../../com/mojang/serialization/Dynamic.d.ts'
import type { DynamicOps } from '../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LegacyComponentDataFixUtils extends Object {
    static createEmptyComponent<T extends unknown>(paramops: DynamicOps<T>): Dynamic<T>;
    static createPlainTextComponent<T extends unknown>(paramops: DynamicOps<T>, paramtext: string): Dynamic<T>;
    static createTextComponentJson(paramtext: string): string;
    static createTranslatableComponent<T extends unknown>(paramops: DynamicOps<T>, paramkey: string): Dynamic<T>;
    static createTranslatableComponentJson(paramkey: string): string;
    static extractTranslationString(paramcomponent: string): Optional<string>;
    static isStrictlyValidJson(paramcomponent: Dynamic<Object>): boolean;
    static rewriteFromLenient(paramstring: string): string;
    constructor()
}