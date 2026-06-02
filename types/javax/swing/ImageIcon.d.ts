import type { Component } from '../../java/awt/Component.d.ts'
import type { Graphics } from '../../java/awt/Graphics.d.ts'
import type { Image } from '../../java/awt/Image.d.ts'
import type { MediaTracker } from '../../java/awt/MediaTracker.d.ts'
import type { ImageObserver } from '../../java/awt/image/ImageObserver.d.ts'
import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { URL } from '../../java/net/URL.d.ts'
import type { Accessible } from '../../javax/accessibility/Accessible.d.ts'
import type { AccessibleContext } from '../../javax/accessibility/AccessibleContext.d.ts'
import type { Icon } from '../../javax/swing/Icon.d.ts'
import type { ImageIcon$AccessibleImageIcon } from '../../javax/swing/ImageIcon$AccessibleImageIcon.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class ImageIcon extends Object implements Serializable, Accessible, Icon {
    constructor()
    constructor(arg0: Image)
    constructor(arg0: Image, arg1: string)
    constructor(arg0: URL)
    constructor(arg0: URL, arg1: string)
    constructor(arg0: number[])
    constructor(arg0: number[], arg1: string)
    constructor(arg0: string)
    constructor(arg0: string, arg1: string)
    readonly accessibleContext: ImageIcon$AccessibleImageIcon;
    description: string;
    // private filename: string;
    // private height: number;
    image: Image;
    imageObserver: ImageObserver;
    // private loadStatus: number;
    // private location: URL;
    // private width: number;
    getAccessibleContext(): AccessibleContext;
    getDescription(): string;
    getIconHeight(): number;
    getIconWidth(): number;
    getImage(): Image;
    getImageLoadStatus(): number;
    getImageObserver(): ImageObserver;
    // private getNextID(): number;
    // private getTracker(): MediaTracker;
    loadImage(arg0: Image): void;
    paintIcon(arg0: Component, arg1: Graphics, arg2: number, arg3: number): void;
    // private readObject(arg0: ObjectInputStream): void;
    setDescription(arg0: string): void;
    setImage(arg0: Image): void;
    setImageObserver(arg0: ImageObserver): void;
    toString(): string;
    // private writeObject(arg0: ObjectOutputStream): void;
}