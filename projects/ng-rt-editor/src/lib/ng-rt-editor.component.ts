import { Component, Input, OnInit } from '@angular/core';
import { OptionsType, TextFormatsType } from './const';
import { faBold, faItalic, faUnderline, faStrikethrough, 
         faSuperscript, faSubscript, faLink, faUnlink,
         faListUl, faListOl ,faUndo, faRedo,
         faAlignLeft, faAlignRight, faAlignCenter, faAlignJustify,
         faIndent, faOutdent, faQuoteRight
        } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'rt-editor',
  templateUrl: './ng-rt-editor.component.html',
  styleUrls: ['./ng-rt-editor.component.scss']
})
export class RtEditorComponent implements OnInit {

  @Input() isDisabled?: boolean = true;
  textData: string = '';
  faBold = faBold;
  faItalic = faItalic;
  faUnderline = faUnderline;
  faStrikethrough = faStrikethrough;
  faSuperscript = faSuperscript;
  faSubscript = faSubscript;
  faListUl = faListUl;
  faListOl = faListOl;
  faUndo = faUndo;
  faRedo = faRedo;
  faAlignLeft = faAlignLeft;
  faAlignRight = faAlignRight;
  faAlignCenter = faAlignCenter;
  faAlignJustify = faAlignJustify;
  faIndent = faIndent;
  faOutdent = faOutdent;
  faQuoteRight = faQuoteRight;
  faLink = faLink;
  faUnlink = faUnlink;
  toolbarOptions = {
    formats: ['bold', 'italic', 'underline', 'strike'],
    script: ['subscript', 'superscript'],
    code: ['blockquote', 'code-block'],
    // indent?: string
    list: ['ordered', 'bullet'],
    direction: ['ltr', 'rtl'],
    // header?: number | Array<boolean | number>
    // color?: string[] | string
    // background?: string[] | string
    align: ['left', 'center', 'right', 'justified'],
    // font?: string[] | string
    // size?: Array<boolean | string>
  }
  constructor() { }

  ngOnInit() {
  }

  formatText(type: OptionsType): void {
    // this.toolbarOptions['text_format'][type] = !this.toolbarOptions['text_format'][type];
    switch (type) {
      case 'code':
      case 'blockquote':
        this.modifyText('formatBlock', false, type);
        break;
      default:
        this.modifyText(type, false, null);
        break;
    }
  }

  modifyText(command: string, defaultUi: boolean, value: any) {
    //execCommand executes command on selected text
    document.execCommand(command, defaultUi, value);
  };

}

// let optionsButtons = document.querySelectorAll(".option-button");
// let advancedOptionButton = document.querySelectorAll(".adv-option-button");
// let fontName = document.getElementById("fontName");
// let fontSizeRef = document.getElementById("fontSize");
// let writingArea = document.getElementById("text-input");
// let linkButton = document.getElementById("createLink");
// let alignButtons = document.querySelectorAll(".align");
// let spacingButtons = document.querySelectorAll(".spacing");
// let formatButtons = document.querySelectorAll(".format");
// let scriptButtons = document.querySelectorAll(".script");

// //List of fontlist
// let fontList = [
//   "Arial",
//   "Verdana",
//   "Times New Roman",
//   "Garamond",
//   "Georgia",
//   "Courier New",
//   "cursive",
// ];

// //Initial Settings
// const initializer = () => {
//   //function calls for highlighting buttons
//   //No highlights for link, unlink,lists, undo,redo since they are one time operations
//   highlighter(alignButtons, true);
//   highlighter(spacingButtons, true);
//   highlighter(formatButtons, false);
//   highlighter(scriptButtons, true);

//   //create options for font names
//   fontList.map((value) => {
//     let option = document.createElement("option");
//     option.value = value;
//     option.innerHTML = value;
//     fontName.appendChild(option);
//   });

//   //fontSize allows only till 7
//   for (let i = 1; i <= 7; i++) {
//     let option = document.createElement("option");
//     option.value = i;
//     option.innerHTML = i;
//     fontSizeRef.appendChild(option);
//   }

//   //default size
//   fontSizeRef.value = 3;
// };

// //main logic
// const modifyText = (command, defaultUi, value) => {
//   //execCommand executes command on selected text
//   document.execCommand(command, defaultUi, value);
// };

// //For basic operations which don't need value parameter
// optionsButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     modifyText(button.id, false, null);
//   });
// });

// //options that require value parameter (e.g colors, fonts)
// advancedOptionButton.forEach((button) => {
//   button.addEventListener("change", () => {
//     modifyText(button.id, false, button.value);
//   });
// });

// //link
// linkButton.addEventListener("click", () => {
//   let userLink = prompt("Enter a URL");
//   //if link has http then pass directly else add https
//   if (/http/i.test(userLink)) {
//     modifyText(linkButton.id, false, userLink);
//   } else {
//     userLink = "http://" + userLink;
//     modifyText(linkButton.id, false, userLink);
//   }
// });

// //Highlight clicked button
// const highlighter = (className, needsRemoval) => {
//   className.forEach((button) => {
//     button.addEventListener("click", () => {
//       //needsRemoval = true means only one button should be highlight and other would be normal
//       if (needsRemoval) {
//         let alreadyActive = false;

//         //If currently clicked button is already active
//         if (button.classList.contains("active")) {
//           alreadyActive = true;
//         }

//         //Remove highlight from other buttons
//         highlighterRemover(className);
//         if (!alreadyActive) {
//           //highlight clicked button
//           button.classList.add("active");
//         }
//       } else {
//         //if other buttons can be highlighted
//         button.classList.toggle("active");
//       }
//     });
//   });
// };

// const highlighterRemover = (className) => {
//   className.forEach((button) => {
//     button.classList.remove("active");
//   });
// };

// window.onload = initializer();
