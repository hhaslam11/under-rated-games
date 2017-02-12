
#Vars
game_title = input("Game title: ")
game_desc = input("Game description: ")
game_class = input("Game css class name: ")
bg_img_name = input("Background image name: ")

game_link_steam = input("Steam link (leave blank if none): ")
game_link_psn = input("Playstation Store link (leave blank if none): ")
game_link_xbox = input("Xbox link (leave blank if none): ")
game_link_gplay = input("Google Playstore link (leave blank if none): ")

graphics_rating = input("Graphics Rating (out of 5): ")
graphics_desc = input("Graphics description: ")

gameplay_rating = input("Gameplay Rating (out of 5): ")
gameplay_desc = input("Gameplay description: ")

story_rating = input("Story Rating (out of 5): ")
story_desc = input("Story description: ")



html  = "<div class=\"section " + game_class + "\">\n"
html += "\t<div class=\"game\">\n"
html += "\t\t<h1>" + game_title + "</h1>\n"

if (game_link_steam != ""):
    html += "\t\t<a href=\"" + game_link_steam + "\" title=\"" + game_title + " on Steam\" target=\"_blank\"><img src=\"img/logo/steam.png\" alt=\"" + game_title + " on Steam\"/></a>\n"

if (game_link_psn != ""):
    html += "\t\t<a href=\"" + game_link_psn + "\" title=\"" + game_title + " on Playstation\" target=\"_blank\"><img src=\"img/logo/playstation.png\" alt=\"" + game_title + " on Playstation\"/></a>\n"

if (game_link_xbox != ""):
    html += "\t\t<a href=\"" + game_link_xbox + "\" title=\"" + game_title + " on Xbox\" target=\"_blank\"><img src=\"img/logo/xbox.png\" alt=\"" + game_title + " on Xbox\"/></a>\n"

if (game_link_gplay != ""):
    html += "\t\t<a href=\"" + game_link_gplay + "\" title=\"" + game_title + " on Google Play\" target=\"_blank\"><img src=\"img/logo/play.png\" alt=\"" + game_title + " on Google Play\"/></a>\n"

html += "\n\t\t<p>" + game_desc + "</p>\n"

print(html)