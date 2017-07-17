export default class {

  obj = {};
  dataString = '';

  parseJson(xml) {
    // Create the return object
    if (xml.nodeType === 1) { // element
      // do attributes
      if (xml.attributes.length > 0) {
        this.obj['@attributes'] = {};
        for (let j = 0; j < xml.attributes.length; j += 1) {
          const attribute = xml.attributes.item(j);
          this.obj['@attributes'][attribute.nodeName] = attribute.nodeValue;
        }
      }
    } else if (xml.nodeType === 3) { // text
      this.obj = xml.nodeValue;
    }

    // do children
    if (xml.hasChildNodes()) {
      for (let i = 0; i < xml.childNodes.length; i += 1) {
        const item = xml.childNodes.item(i);
        const nodeName = item.nodeName;
        if (typeof (this.obj[nodeName]) === 'undefined') {
          this.obj[nodeName] = this.parseJson(item);
        } else {
          if (typeof (this.obj[nodeName].push) === 'undefined') {
            const old = this.obj[nodeName];
            this.obj[nodeName] = [];
            this.obj[nodeName].push(old);
          }
          this.obj[nodeName].push(this.parseJson(item));
        }
      }
    }
    return this.obj;
  }

  static parseJsonStringify(objectJson) {
    const jsonText = JSON.stringify(objectJson);
    return jsonText.trim();
  }

  getStringData(values) {
    const stringdata = this.dataString + values;
    return stringdata;
  }

  // parser string xml ke bentuk xml file
  static parseStringToXML(mString) {
    let mXML;
    // jika browser IE
    if (window.ActiveXObject) {
    // eslint-disable-next-line no-undef
      const xmlActive = new ActiveXObject('Microsoft.XMLDOM');
      mXML = xmlActive.loadXML(mString);
    } else {
      mXML = new DOMParser().parseFromString(mString, 'text/xml');
    }

    return mXML;
  }

  // parser xml to string
  static parseXMLToString(oxml) {
    let varString = '';
    if (window.ActiveXObject) {
      // jika browser adalah ie;
      varString = oxml.xml;
    } else {
      varString = new XMLSerializer().serializeToString(oxml);
    }

    return varString;
  }
}
