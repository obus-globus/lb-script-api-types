import type { Component } from '../../java/awt/Component.d.ts'
import type { Image } from '../../java/awt/Image.d.ts'
import type { MediaEntry } from '../../java/awt/MediaEntry.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class MediaTracker extends Object implements Serializable {
    static ABORTED: number;
    static COMPLETE: number;
    static ERRORED: number;
    static LOADING: number;
    constructor(arg0: Component)
    // private head: MediaEntry;
    // private target: Component;
    addImage(arg0: Image, arg1: number): void;
    addImage(arg0: Image, arg1: number, arg2: number, arg3: number): void;
    // private addImageImpl(arg0: Image, arg1: number, arg2: number, arg3: number): void;
    checkAll(): boolean;
    checkAll(arg0: boolean): boolean;
    // private checkAll(arg0: boolean, arg1: boolean): boolean;
    checkID(arg0: number): boolean;
    checkID(arg0: number, arg1: boolean): boolean;
    // private checkID(arg0: number, arg1: boolean, arg2: boolean): boolean;
    getErrorsAny(): Object[];
    getErrorsID(arg0: number): Object[];
    isErrorAny(): boolean;
    isErrorID(arg0: number): boolean;
    removeImage(arg0: Image): void;
    removeImage(arg0: Image, arg1: number): void;
    removeImage(arg0: Image, arg1: number, arg2: number, arg3: number): void;
    // private removeImageImpl(arg0: Image): void;
    // private removeImageImpl(arg0: Image, arg1: number): void;
    // private removeImageImpl(arg0: Image, arg1: number, arg2: number, arg3: number): void;
    setDone(): void;
    statusAll(arg0: boolean): number;
    // private statusAll(arg0: boolean, arg1: boolean): number;
    statusID(arg0: number, arg1: boolean): number;
    // private statusID(arg0: number, arg1: boolean, arg2: boolean): number;
    waitForAll(): void;
    waitForAll(arg0: number): boolean;
    waitForID(arg0: number): void;
    waitForID(arg0: number, arg1: number): boolean;
}