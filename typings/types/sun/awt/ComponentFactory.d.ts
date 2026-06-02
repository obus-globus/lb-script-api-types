import type { Button } from '../../java/awt/Button.d.ts'
import type { Canvas } from '../../java/awt/Canvas.d.ts'
import type { Checkbox } from '../../java/awt/Checkbox.d.ts'
import type { CheckboxMenuItem } from '../../java/awt/CheckboxMenuItem.d.ts'
import type { Choice } from '../../java/awt/Choice.d.ts'
import type { Component } from '../../java/awt/Component.d.ts'
import type { Desktop } from '../../java/awt/Desktop.d.ts'
import type { Dialog } from '../../java/awt/Dialog.d.ts'
import type { FileDialog } from '../../java/awt/FileDialog.d.ts'
import type { Frame } from '../../java/awt/Frame.d.ts'
import type { GraphicsDevice } from '../../java/awt/GraphicsDevice.d.ts'
import type { Label } from '../../java/awt/Label.d.ts'
import type { List } from '../../java/awt/List.d.ts'
import type { Menu } from '../../java/awt/Menu.d.ts'
import type { MenuBar } from '../../java/awt/MenuBar.d.ts'
import type { MenuItem } from '../../java/awt/MenuItem.d.ts'
import type { Panel } from '../../java/awt/Panel.d.ts'
import type { PopupMenu } from '../../java/awt/PopupMenu.d.ts'
import type { ScrollPane } from '../../java/awt/ScrollPane.d.ts'
import type { Scrollbar } from '../../java/awt/Scrollbar.d.ts'
import type { Taskbar } from '../../java/awt/Taskbar.d.ts'
import type { TextArea } from '../../java/awt/TextArea.d.ts'
import type { TextField } from '../../java/awt/TextField.d.ts'
import type { Window } from '../../java/awt/Window.d.ts'
import type { DragGestureEvent } from '../../java/awt/dnd/DragGestureEvent.d.ts'
import type { DragSourceContextPeer } from '../../java/awt/dnd/peer/DragSourceContextPeer.d.ts'
import type { ButtonPeer } from '../../java/awt/peer/ButtonPeer.d.ts'
import type { CanvasPeer } from '../../java/awt/peer/CanvasPeer.d.ts'
import type { CheckboxMenuItemPeer } from '../../java/awt/peer/CheckboxMenuItemPeer.d.ts'
import type { CheckboxPeer } from '../../java/awt/peer/CheckboxPeer.d.ts'
import type { ChoicePeer } from '../../java/awt/peer/ChoicePeer.d.ts'
import type { DesktopPeer } from '../../java/awt/peer/DesktopPeer.d.ts'
import type { DialogPeer } from '../../java/awt/peer/DialogPeer.d.ts'
import type { FileDialogPeer } from '../../java/awt/peer/FileDialogPeer.d.ts'
import type { FontPeer } from '../../java/awt/peer/FontPeer.d.ts'
import type { FramePeer } from '../../java/awt/peer/FramePeer.d.ts'
import type { LabelPeer } from '../../java/awt/peer/LabelPeer.d.ts'
import type { LightweightPeer } from '../../java/awt/peer/LightweightPeer.d.ts'
import type { ListPeer } from '../../java/awt/peer/ListPeer.d.ts'
import type { MenuBarPeer } from '../../java/awt/peer/MenuBarPeer.d.ts'
import type { MenuItemPeer } from '../../java/awt/peer/MenuItemPeer.d.ts'
import type { MenuPeer } from '../../java/awt/peer/MenuPeer.d.ts'
import type { MouseInfoPeer } from '../../java/awt/peer/MouseInfoPeer.d.ts'
import type { PanelPeer } from '../../java/awt/peer/PanelPeer.d.ts'
import type { PopupMenuPeer } from '../../java/awt/peer/PopupMenuPeer.d.ts'
import type { RobotPeer } from '../../java/awt/peer/RobotPeer.d.ts'
import type { ScrollPanePeer } from '../../java/awt/peer/ScrollPanePeer.d.ts'
import type { ScrollbarPeer } from '../../java/awt/peer/ScrollbarPeer.d.ts'
import type { TaskbarPeer } from '../../java/awt/peer/TaskbarPeer.d.ts'
import type { TextAreaPeer } from '../../java/awt/peer/TextAreaPeer.d.ts'
import type { TextFieldPeer } from '../../java/awt/peer/TextFieldPeer.d.ts'
import type { WindowPeer } from '../../java/awt/peer/WindowPeer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { DataTransferer } from '../../sun/awt/datatransfer/DataTransferer.d.ts'
export interface ComponentFactory extends Object{
    createButton(arg0: Button): ButtonPeer;
    createCanvas(arg0: Canvas): CanvasPeer;
    createCheckbox(arg0: Checkbox): CheckboxPeer;
    createCheckboxMenuItem(arg0: CheckboxMenuItem): CheckboxMenuItemPeer;
    createChoice(arg0: Choice): ChoicePeer;
    createComponent(arg0: Component): LightweightPeer;
    createDesktopPeer(arg0: Desktop): DesktopPeer;
    createDialog(arg0: Dialog): DialogPeer;
    createDragSourceContextPeer(arg0: DragGestureEvent): DragSourceContextPeer;
    createFileDialog(arg0: FileDialog): FileDialogPeer;
    createFrame(arg0: Frame): FramePeer;
    createLabel(arg0: Label): LabelPeer;
    createList(arg0: List): ListPeer;
    createMenu(arg0: Menu): MenuPeer;
    createMenuBar(arg0: MenuBar): MenuBarPeer;
    createMenuItem(arg0: MenuItem): MenuItemPeer;
    createPanel(arg0: Panel): PanelPeer;
    createPopupMenu(arg0: PopupMenu): PopupMenuPeer;
    createRobot(arg0: GraphicsDevice): RobotPeer;
    createScrollPane(arg0: ScrollPane): ScrollPanePeer;
    createScrollbar(arg0: Scrollbar): ScrollbarPeer;
    createTaskbarPeer(arg0: Taskbar): TaskbarPeer;
    createTextArea(arg0: TextArea): TextAreaPeer;
    createTextField(arg0: TextField): TextFieldPeer;
    createWindow(arg0: Window): WindowPeer;
    getDataTransferer(): DataTransferer;
    getFontPeer(arg0: string, arg1: number): FontPeer;
    getMouseInfoPeer(): MouseInfoPeer;
}