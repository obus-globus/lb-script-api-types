import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../../../com/mojang/serialization/Keyable.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { StringRepresentable } from '../../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
export class Panda$Gene extends Enum<Panda$Gene> implements StringRepresentable {
    static AGGRESSIVE: Panda$Gene;
    static BROWN: Panda$Gene;
    static CODEC: Codec<Panda$Gene>;
    static LAZY: Panda$Gene;
    static NORMAL: Panda$Gene;
    static PLAYFUL: Panda$Gene;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static WEAK: Panda$Gene;
    static WORRIED: Panda$Gene;
    static byId(paramid: number): Panda$Gene;
    static createNameLookup<T extends StringRepresentable>(paramvalueArray: T[]): (param0: string) => T;
    static createNameLookup<T extends unknown>(paramvalueArray: T[], paramconverter: (param0: T) => string): (param0: string) => T;
    static fromEnum<E extends Enum<E> & StringRepresentable>(paramvalues: () => E[]): StringRepresentable$EnumCodec<E>;
    static fromEnumWithMapping<E extends Enum<E> & StringRepresentable>(paramvalues: () => E[], paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<E>;
    static fromValues<T extends StringRepresentable>(paramvalues: () => T[]): Codec<T>;
    static getRandom(paramrandom: RandomSource): Panda$Gene;
    static keys(paramvalues: StringRepresentable[]): Keyable;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Panda$Gene;
    static values(): Panda$Gene[];
    private constructor(id: number, name: string, isRecessive: boolean)
    readonly id: number;
    // private isRecessive: boolean;
    // private name: string;
    getId(): number;
    getSerializedName(): string;
    isRecessive(): boolean;
    name(): "NORMAL" | "LAZY" | "WORRIED" | "PLAYFUL" | "BROWN" | "WEAK" | "AGGRESSIVE";
}