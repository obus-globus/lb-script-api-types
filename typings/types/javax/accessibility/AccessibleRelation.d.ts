import type { AccessibleBundle } from '../../javax/accessibility/AccessibleBundle.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class AccessibleRelation extends AccessibleBundle {
    static CHILD_NODE_OF: string;
    static CHILD_NODE_OF_PROPERTY: string;
    static CONTROLLED_BY: string;
    static CONTROLLED_BY_PROPERTY: string;
    static CONTROLLER_FOR: string;
    static CONTROLLER_FOR_PROPERTY: string;
    static EMBEDDED_BY: string;
    static EMBEDDED_BY_PROPERTY: string;
    static EMBEDS: string;
    static EMBEDS_PROPERTY: string;
    static FLOWS_FROM: string;
    static FLOWS_FROM_PROPERTY: string;
    static FLOWS_TO: string;
    static FLOWS_TO_PROPERTY: string;
    static LABELED_BY: string;
    static LABELED_BY_PROPERTY: string;
    static LABEL_FOR: string;
    static LABEL_FOR_PROPERTY: string;
    static MEMBER_OF: string;
    static MEMBER_OF_PROPERTY: string;
    static PARENT_WINDOW_OF: string;
    static PARENT_WINDOW_OF_PROPERTY: string;
    static SUBWINDOW_OF: string;
    static SUBWINDOW_OF_PROPERTY: string;
    constructor(arg0: string)
    constructor(arg0: string, arg1: Object)
    constructor(arg0: string, arg1: Object[])
    readonly target: Object[];
    getKey(): string;
    getTarget(): Object[];
    setTarget(arg0: Object): void;
    setTarget(arg0: Object[]): void;
}