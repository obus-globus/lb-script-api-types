import type { Profile$TimeLineItem } from '../../../../../../com/oracle/truffle/tools/chromeinspector/types/Profile$TimeLineItem.d.ts'
import type { ProfileNode } from '../../../../../../com/oracle/truffle/tools/chromeinspector/types/ProfileNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class Profile extends Object {
    constructor(nodes: ProfileNode[], startTime: number, endTime: number, timeLine: Profile$TimeLineItem[])
    readonly endTime: number;
    readonly nodes: ProfileNode[];
    readonly startTime: number;
    readonly timeLine: Profile$TimeLineItem[];
    getEndTime(): number;
    getNodes(): ProfileNode[];
    getStartTime(): number;
    getTimeLine(): Profile$TimeLineItem[];
    toJSON(): JSONObject;
}