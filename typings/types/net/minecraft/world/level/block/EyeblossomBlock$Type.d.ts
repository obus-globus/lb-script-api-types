import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { SoundEvent } from '../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
import type { MobEffect } from '../../../../../net/minecraft/world/effect/MobEffect.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class EyeblossomBlock$Type extends Enum<EyeblossomBlock$Type> {
    static CLOSED: EyeblossomBlock$Type;
    static OPEN: EyeblossomBlock$Type;
    static fromBoolean(paramopen: boolean): EyeblossomBlock$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): EyeblossomBlock$Type;
    static values(): (Object | null)[];
    private constructor(open: boolean, effect: Holder<MobEffect>, duration: number, longSwitchSound: SoundEvent, shortSwitchSound: SoundEvent, particleColor: number)
    // private effect: Holder<MobEffect>;
    // private effectDuration: number;
    // private longSwitchSound: SoundEvent;
    // private open: boolean;
    // private particleColor: number;
    // private shortSwitchSound: SoundEvent;
    block(): Block;
    emitSounds(): boolean;
    longSwitchSound(): SoundEvent;
    spawnTransformParticle(level: ServerLevel, pos: BlockPos, random: RandomSource): void;
    state(): BlockState;
    transform(): EyeblossomBlock$Type;
    name(): "OPEN" | "CLOSED";
}