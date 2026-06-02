import type { RuntimeCallFrame } from '../../../../../../com/oracle/truffle/tools/chromeinspector/types/RuntimeCallFrame.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class ProfileNode extends Object {
    constructor(id: number, callFrame: RuntimeCallFrame, hitCount: number)
    readonly callFrame: RuntimeCallFrame;
    // private children: number[];
    readonly hitCount: number;
    readonly id: number;
    addChild(childId: number): void;
    getCallFrame(): RuntimeCallFrame;
    getHitCount(): number;
    getId(): number;
    // private toJSON(): JSONObject;
}