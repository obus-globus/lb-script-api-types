import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../../../com/mojang/serialization/Keyable.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StringRepresentable } from '../../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
export class Armadillo$ArmadilloState extends Enum<Armadillo$ArmadilloState> implements StringRepresentable {
    static IDLE: Armadillo$ArmadilloState;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static ROLLING: Armadillo$ArmadilloState;
    static SCARED: Armadillo$ArmadilloState;
    static STREAM_CODEC: StreamCodec<ByteBuf, Armadillo$ArmadilloState>;
    static UNROLLING: Armadillo$ArmadilloState;
    static createNameLookup(paramvalueArray: (StringRepresentable | null)[]): (param0: string) => StringRepresentable | null;
    static createNameLookup(paramvalueArray: (Object | null)[], paramconverter: (param0: Object | null) => string): (param0: string) => Object | null;
    static fromEnum(paramvalues: () => (Object | null)[]): StringRepresentable$EnumCodec<any>;
    static fromEnumWithMapping(paramvalues: () => (Object | null)[], paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<any>;
    static fromValues(paramvalues: () => (StringRepresentable | null)[]): Codec<StringRepresentable>;
    static keys(paramvalues: StringRepresentable[]): Keyable;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Armadillo$ArmadilloState;
    static values(): Armadillo$ArmadilloState[];
    private constructor(name: string, isThreatened: boolean, animationDuration: number, id: number)
    // private animationDuration: number;
    // private id: number;
    // private isThreatened: boolean;
    // private name: string;
    animationDuration(): number;
    getSerializedName(): string;
    // private id(): number;
    isThreatened(): boolean;
    shouldHideInShell(ticksInState: number): boolean;
    name(): "IDLE" | "ROLLING" | "SCARED" | "UNROLLING";
}