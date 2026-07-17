import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StringRepresentable } from '../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class Armadillo$ArmadilloState extends Enum<Armadillo$ArmadilloState> implements StringRepresentable {
    static IDLE: Armadillo$ArmadilloState;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static ROLLING: Armadillo$ArmadilloState;
    static SCARED: Armadillo$ArmadilloState;
    static STREAM_CODEC: StreamCodec<ByteBuf, Armadillo$ArmadilloState>;
    static UNROLLING: Armadillo$ArmadilloState;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
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