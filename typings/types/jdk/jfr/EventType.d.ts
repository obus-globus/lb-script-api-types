import type { Class } from '../../java/lang/Class.d.ts'
import type { AnnotationElement } from '../../jdk/jfr/AnnotationElement.d.ts'
import type { Event } from '../../jdk/jfr/Event.d.ts'
import type { SettingDescriptor } from '../../jdk/jfr/SettingDescriptor.d.ts'
import type { ValueDescriptor } from '../../jdk/jfr/ValueDescriptor.d.ts'
import type { PlatformEventType } from '../../jdk/jfr/internal/PlatformEventType.d.ts'
import type { Type } from '../../jdk/jfr/internal/Type.d.ts'
import type { Annotation } from '../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class EventType extends Object {
    static getEventType(paramarg0: Class<Event>): EventType;
    constructor(arg0: PlatformEventType)
    // private cache: { [key: string]: ValueDescriptor };
    readonly label: string;
    // private platformEventType: PlatformEventType;
    getAnnotation<A extends Annotation>(arg0: Class<A>): A;
    getAnnotationElements(): AnnotationElement[];
    getCategoryNames(): string[];
    getDescription(): string;
    getField(arg0: string): ValueDescriptor;
    getFields(): ValueDescriptor[];
    getId(): number;
    getLabel(): string;
    getName(): string;
    getPlatformEventType(): PlatformEventType;
    getSettingDescriptors(): SettingDescriptor[];
    getType(): Type;
    isEnabled(): boolean;
    isVisible(): boolean;
}