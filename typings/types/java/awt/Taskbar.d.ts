import type { Image } from '../../java/awt/Image.d.ts'
import type { PopupMenu } from '../../java/awt/PopupMenu.d.ts'
import type { Taskbar$Feature } from '../../java/awt/Taskbar$Feature.d.ts'
import type { Taskbar$State } from '../../java/awt/Taskbar$State.d.ts'
import type { Window } from '../../java/awt/Window.d.ts'
import type { TaskbarPeer } from '../../java/awt/peer/TaskbarPeer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Taskbar extends Object {
    static getTaskbar(): Taskbar;
    static isTaskbarSupported(): boolean;
    private constructor()
    // private peer: TaskbarPeer;
    // private checkFeatureSupport(arg0: Taskbar$Feature): void;
    getIconImage(): Image;
    getMenu(): PopupMenu;
    isSupported(arg0: Taskbar$Feature): boolean;
    requestUserAttention(arg0: boolean, arg1: boolean): void;
    requestWindowUserAttention(arg0: Window): void;
    setIconBadge(arg0: string): void;
    setIconImage(arg0: Image): void;
    setMenu(arg0: PopupMenu): void;
    setProgressValue(arg0: number): void;
    setWindowIconBadge(arg0: Window, arg1: Image): void;
    setWindowProgressState(arg0: Window, arg1: Taskbar$State): void;
    setWindowProgressValue(arg0: Window, arg1: number): void;
}