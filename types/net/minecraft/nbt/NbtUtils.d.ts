import type { Dynamic } from '../../../com/mojang/serialization/Dynamic.d.ts'
import type { StringBuilder } from '../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { HolderGetter } from '../../../net/minecraft/core/HolderGetter.d.ts'
import type { CompoundTag } from '../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Tag } from '../../../net/minecraft/nbt/Tag.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
import type { Block } from '../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { FluidState } from '../../../net/minecraft/world/level/material/FluidState.d.ts'
import type { ValueOutput } from '../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
export class NbtUtils extends Object {
    static SNBT_DATA_TAG: string;
    static addCurrentDataVersion(paramtag: CompoundTag): CompoundTag;
    static addCurrentDataVersion(paramoutput: ValueOutput): void;
    static addDataVersion(paramtag: Dynamic<Object>, paramversion: number): Dynamic<Object>;
    static addDataVersion(paramtag: CompoundTag, paramversion: number): CompoundTag;
    static addDataVersion(paramoutput: ValueOutput, paramversion: number): void;
    static compareNbt(paramexpected: Tag, paramactual: Tag, parampartialListMatches: boolean): boolean;
    static getDataVersion(paramdynamic: Dynamic<Object>): number;
    static getDataVersion(paramdynamic: Dynamic<Object>, param_default: number): number;
    static getDataVersion(paramtag: CompoundTag): number;
    static getDataVersion(paramtag: CompoundTag, param_default: number): number;
    static prettyPrint(paramtag: Tag, paramwithBinaryBlobs: boolean): string;
    static prettyPrint(parambuilder: StringBuilder, paraminput: Tag, paramindent: number, paramwithBinaryBlobs: boolean): StringBuilder;
    static readBlockState(paramblocks: HolderGetter<Block>, paramtag: CompoundTag): BlockState;
    static snbtToStructure(paramsnbt: string): CompoundTag;
    static structureToSnbt(paramstructure: CompoundTag): string;
    static toPrettyComponent(paramtag: Tag): Component;
    static writeBlockState(paramstate: BlockState): CompoundTag;
    static writeFluidState(paramstate: FluidState): CompoundTag;
    private constructor()
}