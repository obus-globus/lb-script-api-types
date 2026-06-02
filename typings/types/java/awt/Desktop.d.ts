import type { Desktop$Action } from '../../java/awt/Desktop$Action.d.ts'
import type { AboutHandler } from '../../java/awt/desktop/AboutHandler.d.ts'
import type { OpenFilesHandler } from '../../java/awt/desktop/OpenFilesHandler.d.ts'
import type { OpenURIHandler } from '../../java/awt/desktop/OpenURIHandler.d.ts'
import type { PreferencesHandler } from '../../java/awt/desktop/PreferencesHandler.d.ts'
import type { PrintFilesHandler } from '../../java/awt/desktop/PrintFilesHandler.d.ts'
import type { QuitHandler } from '../../java/awt/desktop/QuitHandler.d.ts'
import type { QuitStrategy } from '../../java/awt/desktop/QuitStrategy.d.ts'
import type { SystemEventListener } from '../../java/awt/desktop/SystemEventListener.d.ts'
import type { DesktopPeer } from '../../java/awt/peer/DesktopPeer.d.ts'
import type { File } from '../../java/io/File.d.ts'
import type { URI } from '../../java/net/URI.d.ts'
import type { JMenuBar } from '../../javax/swing/JMenuBar.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Desktop extends Object {
    static getDesktop(): Desktop;
    static isDesktopSupported(): boolean;
    private constructor()
    // private peer: DesktopPeer;
    addAppEventListener(arg0: SystemEventListener): void;
    browse(arg0: URI): void;
    browseFileDirectory(arg0: File): void;
    // private checkActionSupport(arg0: Desktop$Action): void;
    disableSuddenTermination(): void;
    edit(arg0: File): void;
    enableSuddenTermination(): void;
    isSupported(arg0: Desktop$Action): boolean;
    mail(): void;
    mail(arg0: URI): void;
    moveToTrash(arg0: File): boolean;
    open(arg0: File): void;
    openHelpViewer(): void;
    print(arg0: File): void;
    removeAppEventListener(arg0: SystemEventListener): void;
    requestForeground(arg0: boolean): void;
    setAboutHandler(arg0: AboutHandler): void;
    setDefaultMenuBar(arg0: JMenuBar): void;
    setOpenFileHandler(arg0: OpenFilesHandler): void;
    setOpenURIHandler(arg0: OpenURIHandler): void;
    setPreferencesHandler(arg0: PreferencesHandler): void;
    setPrintFileHandler(arg0: PrintFilesHandler): void;
    setQuitHandler(arg0: QuitHandler): void;
    setQuitStrategy(arg0: QuitStrategy): void;
}