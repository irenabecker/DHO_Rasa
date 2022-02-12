## happy path
* greet
  - utter_greet
* mood_good
  - utter_good

## sad path 1
* greet
  - utter_greet
* mood_unhappy
  - utter_cheer_up
  - utter_did_that_help
* affirm
  - utter_good

## sad path 2
* greet
  - utter_greet
* mood_unhappy
  - utter_cheer_up
  - utter_did_that_help
* deny
  - utter_bad

## are you a bot
* are_you_a_bot
  - utter_are_you_a_bot

## how are you
* how_are_you
  - utter_how_are_you

## joke path
* joke
  - utter_joke

## thanks
* thanks
  - utter_thanks

## out_of_scope
* out_of_scope
  - utter_out_of_scope

## nlu_fallback
* nlu_fallback
  - utter_please_rephrase

## goodbye path
* goodbye
  - utter_goodbye

## reklamation path
* help
  - utter_help
* back_to_help
   - utter_back_to_help
* reklamation
  - utter_reklamation
  - utter_reklamation_option
* falscher_artikel
  - utter_falscher_artikel
* artikel_beschaedigt
  - utter_artikel_beschaedigt
* new_order 
  - utter_new_order
* cash_back
  - utter_cash_back
* emailadresse
  - utter_emailadresse
* bestellnummer
  - utter_bestellnummer
* funkgerät
  - utter_funkgerät
* radargerät
  - utter_radargerät
* firmenadresse
  - utter_firmenadresse
* thanks
  - utter_thanks
* goodbye
  - utter_goodbye

## faq path
* help
  - utter_help
* faq
  - utter_faq
  - utter_faq_option
* definition_chatbot
  - utter_definition_chatbot
* vorteile_chatbot
  - utter_vorteile_chatbot
* ki_bei_chatbot
  - utter_ki_bei_chatbot
