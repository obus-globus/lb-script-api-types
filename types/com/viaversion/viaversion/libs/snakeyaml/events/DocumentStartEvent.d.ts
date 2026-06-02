import type { DumperOptions$Version } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/DumperOptions$Version.d.ts'
import type { Mark } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/error/Mark.d.ts'
import type { Event } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/events/Event.d.ts'
import type { Event$ID } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/events/Event$ID.d.ts'
export class DocumentStartEvent extends Event {
    constructor(arg0: Mark, arg1: Mark, arg2: boolean, arg3: DumperOptions$Version, arg4: { [key: string]: string })
    readonly explicit: boolean;
    readonly tags: { [key: string]: string };
    readonly version: DumperOptions$Version;
    getEventId(): Event$ID;
    getExplicit(): boolean;
    getTags(): { [key: string]: string };
    getVersion(): DumperOptions$Version;
}