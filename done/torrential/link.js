// TORRENTIAL
// ────────────
// 03-LINK-THE-TORRENT-TO-THE-TRACKER
// Exercise 4 of 6
//
// Now you have bittorrent-tracker installed lets create a torrent file that utilises it.
//
// In the directory you created the xyz folder for step 01 execute the command
//
//    torrent create xyz/ -o xyz-tracker.torrent --tracker http://localhost:8000/announce
//
// If you want to test the .torrent with other workshoppers later then you can replace
// localhost with your local network ip address.
//
// Port 8000 is the default port that the bittorrent-tracker runs on.
//
// /announce is the location mandated by bittorrent-tracker for announcements to be directed at.
//
//
// » To print these instructions again, run: torrential print
// » To execute your program in a test environment, run: torrential run program.js
// » To verify your program, run: torrential verify program.js
// » For help run: torrential help
