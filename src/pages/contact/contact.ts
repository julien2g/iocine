import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FileTransfer, FileUploadOptions, FileTransferObject} from '@ionic-native/file-transfer';
import {File} from '@ionic-native/file';
import {FileOpener} from "@ionic-native/file-opener";


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {


  constructor(public navCtrl: NavController, private transfer: FileTransfer, private file: File, private fileOpener: FileOpener) {

  }

  private fileTransfer: FileTransferObject = this.transfer.create();

  public download() {

    const url = 'http://image.tmdb.org/t/p/w300/gmU3f4aR6Bd8zkk6AiLm0dvWPaE.jpg';
    let name = 'oconnor.jpg';
    //console.log(url);
    this.fileTransfer.download(url, this.file.dataDirectory + name).then((entry) => {
      console.log('download complete: ' + entry.toURL());
      this.openFile(this.file.dataDirectory + name);
    }, (error) => {
      // handle error
      console.log(error);
    });
  }

  openFile(path) {
    this.fileOpener.open(path, 'application/jpg')
      .then(() => console.log('File is opened'))
      .catch(e => console.log('Error openening file', e));
  }


}
