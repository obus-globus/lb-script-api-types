import type { AWTEvent } from '../../../java/awt/AWTEvent.d.ts'
import type { Component } from '../../../java/awt/Component.d.ts'
import type { TextHitInfo } from '../../../java/awt/font/TextHitInfo.d.ts'
import type { ObjectInputStream } from '../../../java/io/ObjectInputStream.d.ts'
import type { AttributedCharacterIterator } from '../../../java/text/AttributedCharacterIterator.d.ts'
export class InputMethodEvent extends AWTEvent {
    static ACTION_EVENT_MASK: number;
    static ADJUSTMENT_EVENT_MASK: number;
    static CARET_POSITION_CHANGED: number;
    static COMPONENT_EVENT_MASK: number;
    static CONTAINER_EVENT_MASK: number;
    static FOCUS_EVENT_MASK: number;
    static HIERARCHY_BOUNDS_EVENT_MASK: number;
    static HIERARCHY_EVENT_MASK: number;
    static INPUT_METHOD_EVENT_MASK: number;
    static INPUT_METHOD_FIRST: number;
    static INPUT_METHOD_LAST: number;
    static INPUT_METHOD_TEXT_CHANGED: number;
    static INVOCATION_EVENT_MASK: number;
    static ITEM_EVENT_MASK: number;
    static KEY_EVENT_MASK: number;
    static MOUSE_EVENT_MASK: number;
    static MOUSE_MOTION_EVENT_MASK: number;
    static MOUSE_WHEEL_EVENT_MASK: number;
    static PAINT_EVENT_MASK: number;
    static RESERVED_ID_MAX: number;
    static TEXT_EVENT_MASK: number;
    static WINDOW_EVENT_MASK: number;
    static WINDOW_FOCUS_EVENT_MASK: number;
    static WINDOW_STATE_EVENT_MASK: number;
    constructor(arg0: Component, arg1: number, arg2: TextHitInfo, arg3: TextHitInfo)
    constructor(arg0: Component, arg1: number, arg2: AttributedCharacterIterator, arg3: number, arg4: TextHitInfo, arg5: TextHitInfo)
    constructor(arg0: Component, arg1: number, arg2: number, arg3: AttributedCharacterIterator, arg4: number, arg5: TextHitInfo, arg6: TextHitInfo)
    readonly caret: TextHitInfo;
    readonly committedCharacterCount: number;
    readonly text: AttributedCharacterIterator;
    readonly visiblePosition: TextHitInfo;
    when: number;
    consume(): void;
    getCaret(): TextHitInfo;
    getCommittedCharacterCount(): number;
    getText(): AttributedCharacterIterator;
    getVisiblePosition(): TextHitInfo;
    getWhen(): number;
    isConsumed(): boolean;
    paramString(): string;
    // private readObject(arg0: ObjectInputStream): void;
}