import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { WorldRenderEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
import type { Color4b } from '../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { Rotation } from '../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { Pose } from '../../../../../net/minecraft/world/entity/Pose.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { Quaternionf } from '../../../../../org/joml/Quaternionf.d.ts'
export class WireframePlayer extends Object {
    constructor()
    pos: Vec3;
    pose: Pose;
    // private quaternion: Quaternionf;
    swimAmount: number;
    // private xRot: number;
    /*not mapped: */ getXRot(): number;
    // private yRot: number;
    /*not mapped: */ getYRot(): number;
    render(event: WorldRenderEvent, color: Color4b, outlineColor: Color4b): void;
    setPosRot(x: number, y: number, z: number, yRot: number, xRot: number): void;
    setRotation(rotation: Rotation): void;
}