
// ambient.ts
// imports
import "../augmentations/index.d.ts"
import { ScriptSetting as ScriptSetting_ } from "../types/net/ccbluex/liquidbounce/script/bindings/features/ScriptSetting";
import { Vec3i as Vec3i_ } from "../types/net/minecraft/core/Vec3i";
import { Vec3 as Vec3_ } from "../types/net/minecraft/world/phys/Vec3";
import { Mth as Mth_ } from "../types/net/minecraft/util/Mth";
import { BlockPos as BlockPos_ } from "../types/net/minecraft/core/BlockPos";
import { InteractionHand as InteractionHand_ } from "../types/net/minecraft/world/InteractionHand";
import { Axis as Axis_ } from "../types/com/mojang/math/Axis";
import { RenderSystem as RenderSystem_ } from "../types/com/mojang/blaze3d/systems/RenderSystem";
import { Vec3 as Vec3_ } from "../types/net/minecraft/world/phys/Vec3";
import { Mth as Mth_ } from "../types/net/minecraft/util/Mth";
import { InteractionHand as InteractionHand_ } from "../types/net/minecraft/world/InteractionHand";
import { Axis as Axis_ } from "../types/com/mojang/math/Axis";
import { Color4b as Color4b_ } from "../types/net/ccbluex/liquidbounce/render/engine/type/Color4b";
import { Minecraft as Minecraft_ } from "../types/net/minecraft/client/Minecraft";
import { ScriptClient as ScriptClient_ } from "../types/net/ccbluex/liquidbounce/script/bindings/api/ScriptClient";
import { ScriptRotationUtil as ScriptRotationUtil_ } from "../types/net/ccbluex/liquidbounce/script/bindings/api/ScriptRotationUtil";
import { ScriptItemUtil as ScriptItemUtil_ } from "../types/net/ccbluex/liquidbounce/script/bindings/api/ScriptItemUtil";
import { ScriptNetworkUtil as ScriptNetworkUtil_ } from "../types/net/ccbluex/liquidbounce/script/bindings/api/ScriptNetworkUtil";
import { ScriptInteractionUtil as ScriptInteractionUtil_ } from "../types/net/ccbluex/liquidbounce/script/bindings/api/ScriptInteractionUtil";
import { ScriptBlockUtil as ScriptBlockUtil_ } from "../types/net/ccbluex/liquidbounce/script/bindings/api/ScriptBlockUtil";
import { ScriptMovementUtil as ScriptMovementUtil_ } from "../types/net/ccbluex/liquidbounce/script/bindings/api/ScriptMovementUtil";
import { ScriptReflectionUtil as ScriptReflectionUtil_ } from "../types/net/ccbluex/liquidbounce/script/bindings/api/ScriptReflectionUtil";
import { ScriptParameterValidator as ScriptParameterValidator_ } from "../types/net/ccbluex/liquidbounce/script/bindings/api/ScriptParameterValidator";
import { ScriptUnsafeThread as ScriptUnsafeThread_ } from "../types/net/ccbluex/liquidbounce/script/bindings/api/ScriptUnsafeThread";
import { ScriptPrimitives as ScriptPrimitives_ } from "../types/net/ccbluex/liquidbounce/script/bindings/api/ScriptPrimitives";
import { ConcurrentHashMap as ConcurrentHashMap_ } from "../types/java/util/concurrent/ConcurrentHashMap";
import { ScriptAsyncUtil as ScriptAsyncUtil_ } from "../types/net/ccbluex/liquidbounce/script/bindings/api/ScriptAsyncUtil";
import { PolyglotScript$RegisterScript as PolyglotScript$RegisterScript_ } from "../types/net/ccbluex/liquidbounce/script/PolyglotScript$RegisterScript";
declare global {


// exports
    export const Setting: ScriptSetting_;

    export const mc: Minecraft_;

    export const Client: ScriptClient_;

    export const RotationUtil: ScriptRotationUtil_;

    export const ItemUtil: ScriptItemUtil_;

    export const NetworkUtil: ScriptNetworkUtil_;

    export const InteractionUtil: ScriptInteractionUtil_;

    export const BlockUtil: ScriptBlockUtil_;

    export const MovementUtil: ScriptMovementUtil_;

    export const ReflectionUtil: ScriptReflectionUtil_;

    export const ParameterValidator: ScriptParameterValidator_;

    export const UnsafeThread: ScriptUnsafeThread_;

    export const Primitives: ScriptPrimitives_;

    export const localStorage: ConcurrentHashMap_;

    export const AsyncUtil: ScriptAsyncUtil_;

    export const registerScript: PolyglotScript$RegisterScript_["apply"];

    export const Vec3i: typeof Vec3i_;

    export const Vec3: typeof Vec3_;

    export const Mth: typeof Mth_;

    export const BlockPos: typeof BlockPos_;

    export const InteractionHand: typeof InteractionHand_;

    export const Axis: Axis_;

    export const RenderSystem: typeof RenderSystem_;

    export const Vec3: typeof Vec3_;

    export const Mth: typeof Mth_;

    export const InteractionHand: typeof InteractionHand_;

    export const Axis: Axis_;

    export const Color4b: typeof Color4b_;

}
