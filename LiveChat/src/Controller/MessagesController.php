<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MessagesController extends AbstractController
{
    #[Route('messages/from/{toUserId}', name: 'app_messages')]
    public function sentMessages(ManagerRegistry $doctrine, $fromUserid, $toUserid): JsonResponse
{
    $messageRepo = $doctrine->getRepository(Message::class);
    $userRepo = $doctrine->getRepository(User::class);
    $fromUser = $userRepo->find($fromUserid);
    $toUser = $userRepo->find($toUserid);
    $messages = $messageRepo->findConversation($fromUser, $toUser);

    $data = array_map(function ($message) {
        return [
            'id' => $message->getFromUser()->getId(),
            'text' => $message->getText(),
            'timestamp' => $message->getTimestamp()->format('Y-m-d H:i:s'),
        ];
    }, $messages);

    return new JsonResponse($data, Response::HTTP_OK);
}


    #[Route('post/toUser/{toUserId}')]
    public function sendMessage()
    {
        
    }
}
