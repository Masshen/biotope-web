import { NextResponse } from "next/server";
import { BrevoClient } from "@getbrevo/brevo";

export async function POST(req: Request) {
  const { email, listId } = await req.json();

  /*const apiInstance = new brevo.ContactsApi();

  // Configuration de la clé API
  const apiKey = apiInstance.authentications["apiKey"];
  apiKey.apiKey = process.env.BREVO_API_KEY as string;

  const createContact = new brevo.CreateContact();
  createContact.email = email;
  createContact.listIds = [Number(listId)]; // L'ID de la liste Brevo
  createContact.updateEnabled = true; // Met à jour si le contact existe déjà*/

  try {
    //await apiInstance.createContact(createContact);
    const brevo = new BrevoClient({
    apiKey: process.env.NEXT_PUBLIC_BREVO_API_KEY as string,
  });
    const response = await brevo.contacts.createContact({
        email,
        listIds:[listId],
        updateEnabled:true,
    });
    return NextResponse.json(
      { message: `Contact ajouté avec succès : ${response?.id}` },
      { status: 201 },
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
