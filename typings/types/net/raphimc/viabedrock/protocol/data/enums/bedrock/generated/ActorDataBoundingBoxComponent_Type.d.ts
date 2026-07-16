import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ActorDataBoundingBoxComponent_Type extends Enum<ActorDataBoundingBoxComponent_Type> {
    static Height: ActorDataBoundingBoxComponent_Type;
    static Scale: ActorDataBoundingBoxComponent_Type;
    static Width: ActorDataBoundingBoxComponent_Type;
    static getByName(paramarg0: string): ActorDataBoundingBoxComponent_Type;
    static getByName(paramarg0: string, paramarg1: ActorDataBoundingBoxComponent_Type): ActorDataBoundingBoxComponent_Type;
    static getByValue(paramarg0: number): ActorDataBoundingBoxComponent_Type;
    static getByValue(paramarg0: number, paramarg1: ActorDataBoundingBoxComponent_Type): ActorDataBoundingBoxComponent_Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ActorDataBoundingBoxComponent_Type;
    static values(): ActorDataBoundingBoxComponent_Type[];
    private constructor(arg2: number)
    private constructor(arg2: ActorDataBoundingBoxComponent_Type)
    readonly value: number;
    getValue(): number;
    name(): "Scale" | "Width" | "Height";
}