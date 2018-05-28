/* Code written by @hubgit 
   <style>.gist table { margin-bottom: 0; }</style><div class="gist-oembed" data-gist="hubgit/3755293.json"></div>
   Updated since DocsList is deprecated 
*/

function listFilesInFolder(folderName) {
  
  var folder = DriveApp.getFoldersByName(folderName).next();
  var contents = folder.getFiles();
  
  var file, data, sheet = SpreadsheetApp.getActiveSheet();
  sheet.clear();
  
  sheet.appendRow(["Name", "Date", "Size", "URL", "Download", "Description", "Type"]);
  
  for (var i = 0; i < contents.length; i++) {
 
    file = contents[i];
    
    if (file.getFileType() == "SPREADSHEET") {
      continue;
    }
        
    data = [ 
      file.getName(),
      file.getDateCreated(),
      file.getSize(),
      file.getUrl(),
      "https://docs.google.com/uc?export=download&confirm=no_antivirus&id=" + file.getId(),
      file.getDescription(),
      file.getFileType().toString()
    ];
    
    sheet.appendRow(data);
  
  }
  
};
