import type { MediaTracker } from '../../java/awt/MediaTracker.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class MediaEntry extends Object {
    constructor(arg0: MediaTracker, arg1: number)
    // private ID: number;
    // private cancelled: boolean;
    // private next: MediaEntry;
    // private status: number;
    // private tracker: MediaTracker;
    cancel(): void;
    getID(): number;
    getMedia(): Object;
    getStatus(arg0: boolean, arg1: boolean): number;
    setStatus(arg0: number): void;
    startLoad(): void;
}