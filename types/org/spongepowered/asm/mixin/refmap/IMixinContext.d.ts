import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MixinEnvironment$Option } from '../../../../../org/spongepowered/asm/mixin/MixinEnvironment$Option.d.ts'
import type { IMixinInfo } from '../../../../../org/spongepowered/asm/mixin/extensibility/IMixinInfo.d.ts'
import type { IReferenceMapper } from '../../../../../org/spongepowered/asm/mixin/refmap/IReferenceMapper.d.ts'
import type { Extensions } from '../../../../../org/spongepowered/asm/mixin/transformer/ext/Extensions.d.ts'
export interface IMixinContext extends Object{
    getClassName(): string;
    getClassRef(): string;
    getExtensions(): Extensions;
    getMixin(): IMixinInfo;
    getOption(arg0: MixinEnvironment$Option): boolean;
    getPriority(): number;
    getReferenceMapper(): IReferenceMapper;
    getTargetClassName(): string;
    getTargetClassRef(): string;
}